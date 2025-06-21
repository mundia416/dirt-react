import React, { ReactNode } from 'react'
import Card from '../card'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/20/solid'
import Loading, { LoadingProps } from '../loading'
import AnimatedDiv from '../animated-div'

type RowColumnItemProps = {
    value: string | number | ReactNode
    // whether to show the text as bold
    className?: string
}


export type RowsProps = {
    items: RowColumnItemProps[]
    /**
     * Optional: a view to show when this row is hovered. Will be rendered in a fixed position following the mouse.
     */
    hoverView?: ReactNode
}

export type ColumnTitleProps = {
    name: string
    className?: string
}


type Props = {
    heading?: string
    subHeading?: string
    actionButton?: {
        text: string,
        onClick: () => void
    },
    spacing?: 'normal' | 'tight'
    /**
     * whether to overflow in the x axis with a scrollbar or not
     * useful for situations where this table needs to be nested in a container that has x axis scroll (overflow-auto)
     */
    overflowX?: boolean
    showCardContainer?: boolean
    columnTitles: ColumnTitleProps[],
    rowData: RowsProps[]
    /**allows for a row to be clicked and hovered over */
    onRowClick?: (index: number) => void,
    pagination?: {
        onLoadMore: () => void;
        hasMore: boolean;
        isLoading: boolean;
        loadingProps?: {
            className?: string
            color?: string
            variant?: LoadingProps['variant']
            size?: LoadingProps['size']
        }
    }
}


const Container = (props: {
    showCardContainer: boolean,
    children: React.ReactNode
}) => {
    return (
        <>
            {props.showCardContainer ?

                <div className="mt-8 flow-root">
                    <Card
                        className='p-4 overflow-hidden'>
                        {props.children}
                    </Card>
                </div>
                :
                props.children}
        </>
    )
}

export default function ScrollingTable({
    heading,
    subHeading,
    actionButton,
    columnTitles,
    rowData = [],
    onRowClick,
    pagination,
    overflowX = true,
    showCardContainer = true,
    spacing = 'normal'
}: Props) {
    // State for hovered row and mouse position
    const [hoveredRow, setHoveredRow] = React.useState<number | null>(null);
    const [mousePos, setMousePos] = React.useState<{ x: number, y: number } | null>(null);
    // State for dynamic overlay height
    const [overlayHeight, setOverlayHeight] = React.useState<number>(0);
    const overlayRef = React.useRef<HTMLDivElement>(null);

    const observerTarget = React.useRef(null);

    React.useEffect(() => {
        const observer = new IntersectionObserver(
            entries => {
                if (entries[0] && entries[0].isIntersecting && pagination?.hasMore && !pagination.isLoading) {
                    pagination.onLoadMore();
                }
            },
            {
                threshold: 1.0,
            }
        );

        if (observerTarget.current) {
            observer.observe(observerTarget.current);
        }

        return () => {
            if (observerTarget.current) {
                observer.unobserve(observerTarget.current);
            }
        };
    }, [pagination?.hasMore, pagination?.isLoading, pagination?.onLoadMore]);

    // Measure overlay height when hoverView changes
    React.useEffect(() => {
        if (
            hoveredRow !== null &&
            rowData[hoveredRow] &&
            rowData[hoveredRow].hoverView &&
            overlayRef.current
        ) {
            setOverlayHeight(overlayRef.current.offsetHeight);
        }
    }, [hoveredRow, rowData, hoveredRow !== null ? rowData[hoveredRow]?.hoverView : undefined]);

    // Handler for mouse move on row
    const handleRowMouseMove = (index: number) => (e: React.MouseEvent) => {
        setHoveredRow(index);
        setMousePos({ x: e.clientX, y: e.clientY });
    };
    // Handler for mouse leave
    const handleRowMouseLeave = () => {
        setHoveredRow(null);
        setMousePos(null);
    };

    return (
        <AnimatedDiv className="">
            <div className="sm:flex sm:items-center">
                <div className="sm:flex-auto">
                    <h1 className="text-base font-semibold leading-6 text-gray-900">{heading}</h1>
                    <p className="mt-2 text-sm text-gray-700">
                        {subHeading}
                    </p>
                </div>

                {actionButton &&
                    <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
                        <button
                            onClick={actionButton.onClick}
                            type="button"
                            className="block rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                            {actionButton.text}
                        </button>
                    </div>
                }
            </div>

            <Container
                showCardContainer={showCardContainer}>

                <div className={`-mx-4 -my-2 ${overflowX && 'overflow-x-auto'} sm:-mx-6 lg:-mx-8`}>
                    <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                        {(pagination?.isLoading && rowData.length === 0) ?
                            <Loading
                                {...pagination.loadingProps}
                                className={pagination.loadingProps?.className || 'w-full min-h-40'}
                            />
                            :
                            <table className="min-w-full divide-y divide-gray-300">
                                <thead>
                                    <tr>
                                        {columnTitles.map((item, index) =>
                                            <th key={index} scope="col" className={`${spacing === 'tight' ? (index === 0 ? 'pr-1 pl-2' : 'px-1') : (index === 0 ? 'pl-4 pr-3 sm:pl-0' : 'md:px-3')} py-3.5  text-left text-xs md:text-sm font-semibold text-gray-900 ${item.className}`}>
                                                {item.name}
                                            </th>
                                        )}
                                    </tr>
                                </thead>


                                <tbody className="divide-y divide-gray-200">
                                    {rowData.map((row, index) => (
                                        <tr
                                            ref={index === rowData.length - 3 ? observerTarget : null}
                                            onClick={() => onRowClick && onRowClick(index)}
                                            onMouseMove={row.hoverView ? handleRowMouseMove(index) : undefined}
                                            onMouseLeave={row.hoverView ? handleRowMouseLeave : undefined}
                                            className={`${onRowClick && 'cursor-pointer hover:bg-indigo-50'}`}
                                            key={index}>
                                            {row.items.map((item, itemIndex) => (
                                                <td key={itemIndex} className={`${item.className ? item.className : 'whitespace-nowrap text-gray-500'}  ${spacing === 'tight' ? (itemIndex === 0 ? 'pr-1 pl-2 py-2' : 'px-1 py-2') : (itemIndex === 0 ? 'py-4 pl-4 pr-3 sm:pl-0' : 'px-1 md:px-3 py-4')} text-xs md:text-sm`}>{item.value}</td>
                                            ))}
                                        </tr>
                                    ))}

                                </tbody>
                            </table>
                        }
                    </div>
                </div>



                {/* pagination loading indicator*/}
                {(pagination?.isLoading && rowData.length > 0) && (
                    <div className="flex justify-center p-4">
                        <Loading size="small" />
                    </div>
                )}

            </Container>

            {/* Hover View Overlay */}
            {hoveredRow !== null && rowData[hoveredRow]?.hoverView && mousePos && (
                (() => {
                    const overlayOffset = 6; // px offset from cursor
                    const windowHeight = typeof window !== 'undefined' ? window.innerHeight : 800;
                    // Use measured overlayHeight, fallback to 120 if not measured yet
                    const height = overlayHeight || 120;
                    // If not enough space below, show above
                    const showAbove = (mousePos.y + overlayOffset + height) > windowHeight;
                    const top = showAbove
                        ? Math.max(mousePos.y - height - overlayOffset, 8)
                        : mousePos.y + overlayOffset;
                    return (
                        <div
                            ref={overlayRef}
                            className='shadow-lg animate-in fade-in zoom-in-95 duration-200 z-50'
                            style={{
                                position: 'fixed',
                                left: mousePos.x + overlayOffset, // offset from cursor
                                top,
                                zIndex: 1000,
                                pointerEvents: 'none',
                                minWidth: 200,
                                minHeight: 60,
                                maxWidth: 320,
                                background: 'white',
                                boxShadow: '0 4px 16px rgba(0,0,0,0.12)',
                                borderRadius: 8,
                                visibility: overlayHeight === 0 ? 'hidden' : 'visible', // Hide until measured
                            }}
                        >
                            {rowData[hoveredRow].hoverView}
                        </div>
                    );
                })()
            )}
        </AnimatedDiv>
    )
}