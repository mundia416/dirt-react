import React, { useEffect, useState } from 'react'
import { CameraIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'

type Props = {
    label?: string
    fileTypeString?: string,
    // maximum file size in mb
    maxFileSize?: number
    onChange: (files: File[]) => void,
    disabled?: boolean,
    image?: File | string
}

export default function AvatarUpload({
    fileTypeString = '*.jpeg, *.jpg, *.png',
    maxFileSize = 10,
    onChange,
    disabled,
    image
}: Props) {

    const [capturedImage, setCapturedImage] = useState<File | string>()


    useEffect(() => {
        setCapturedImage(image)
    }, [image])

    const handleFilesSelected = (files: FileList) => {
        const filesResponse: File[] = []
        for (let i = 0; i < files.length; i++) {
            const file = files.item(i)
            if (file) {
                filesResponse.push(file)
            }
        }

        if (filesResponse.length > 0) {
            setCapturedImage(filesResponse[0])
        }

        onChange(filesResponse)
    }

    // const onDrop = useCallback(acceptedFiles => {
    //     // Do something with the files
    //   }, [])
    //   const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop})



    return (
        <div>

            <div className="mt-2 flex justify-center border border-dashed border-gray-900/25 p-2 rounded-full">
                <div className={`text-center bg-slate-100 rounded-full h-44 w-44 relative flex flex-col items-center justify-center px-2`}>
                    <CameraIcon aria-hidden="true" className="mx-auto h-12 w-12 text-gray-300" />

                    <input
                        disabled={disabled}
                        onChange={(item) => item.target.files && handleFilesSelected(item.target.files)}
                        id="avatar-upload" name="file-upload" accept={'image/*'} type={'file'}
                        className={` bg-red-500 h-full w-full absolute  z-10 top-0 left-0 ${!disabled && 'cursor-pointer'} rounded-full opacity-0`}
                        multiple={false} />

                    {capturedImage ?
                        <Image
                            src={typeof capturedImage === 'string' ? capturedImage : URL.createObjectURL(capturedImage)}
                            alt="Avatar"
                            width={450}
                            height={450}
                            className={` object-cover  rounded-full absolute top-0 left-0 right-0 bottom-0 z-0 ${!disabled && 'cursor-pointer'} h-full w-full`}
                        />
                        :
                        <p className="text-xs leading-5 text-gray-600">Allowed {fileTypeString}<span className='block'> max size {maxFileSize}MB</span></p>
                    }
                </div>
            </div>
        </div>

    )
}