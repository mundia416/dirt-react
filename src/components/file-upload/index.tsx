import React from 'react'
import { PhotoIcon } from '@heroicons/react/24/solid'
import Label from '../label'

type Props = {
    label?: string
    multiple?: boolean,
    fileTypeString?: string,
    // maximum file size in mb
    maxFileSize?: number
    onChange: (files: File[]) => void,
    accept?: string
    disabled?: boolean
}

export default function FileUpload({
    label,
    multiple,
    fileTypeString = 'PNG, JPG, GIF',
    maxFileSize = 10,
    accept,
    onChange,
    disabled
}: Props) {

    const handleFilesSelected = (files: FileList) => {
        const filesResponse: File[] = []
        for (let i = 0; i < files.length; i++) {
            const file = files.item(i)
            if (file) {
                filesResponse.push(file)
            }
        }

        onChange(filesResponse)
    }


    return (
        <div>
            {label &&
                <Label>{label}</Label>
            }
            <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                <div className="text-center">
                    <PhotoIcon aria-hidden="true" className="mx-auto h-12 w-12 text-gray-300" />
                    <div className="mt-4 flex text-sm leading-6 text-gray-600">
                        <label
                            htmlFor="file-upload"
                            className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                        >
                            <span>Upload {multiple ? "files" : "a file"}</span>
                            <input
                            disabled={disabled}
                                onChange={(item) => item.target.files && handleFilesSelected(item.target.files)}
                                id="file-upload" name="file-upload" accept={accept} type={'file'} className="sr-only" multiple={multiple} />
                        </label>
                        <p className="pl-1">or drag and drop</p>
                    </div>
                    <p className="text-xs leading-5 text-gray-600">{fileTypeString} up to {maxFileSize}MB</p>
                </div>
            </div>
        </div>

    )
}