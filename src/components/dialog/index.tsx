import {  DialogBackdrop, Dialog as DialogComponent, DialogPanel, DialogTitle } from '@headlessui/react'
import { CheckIcon, ExclamationTriangleIcon } from '@heroicons/react/24/outline'
import React from 'react'

type Props = {
  isOpen: boolean,
  onClose: () => void
  title?: string
  description?: string
  primaryBtnText?: string
  secondaryBtnText?: string
  primaryBtnOnClick?: () => void
  secondaryBtnOnClick?: () => void
  type?: 'success' | 'confirm' | 'clean'
  children?: any
}
function Dialog({
  isOpen, primaryBtnText, secondaryBtnText, primaryBtnOnClick,
  onClose, title, secondaryBtnOnClick, children, type = 'success',
  description }: Props) {

  return (
    <>


      <DialogComponent open={isOpen} onClose={onClose} className="relative z-10">
        <DialogBackdrop
          transition
          className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
        />

        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <DialogPanel
              transition
              className="relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in sm:my-8 sm:w-full sm:max-w-lg sm:p-6 data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95"
            >

              {type === 'clean' && children}

              {type === 'confirm' &&
                <>
                  <div className="sm:flex sm:items-start">
                    <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                      <ExclamationTriangleIcon aria-hidden="true" className="h-6 w-6 text-red-600" />
                    </div>
                    <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                      <DialogTitle as="h3" className="text-base font-semibold leading-6 text-gray-900">
                        {title}
                      </DialogTitle>
                      <div className="mt-2">
                        <p className="text-sm text-gray-500">
                          {description}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-5 sm:mt-4 sm:flex sm:flex-row-reverse">
                    {primaryBtnText &&
                      <button
                        type="button"
                        onClick={primaryBtnOnClick}
                        className="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto"
                      >
                        {primaryBtnText}
                      </button>
                    }

                    {secondaryBtnText &&
                      <button
                        type="button"
                        data-autofocus
                        onClick={secondaryBtnOnClick}
                        className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                      >
                        {secondaryBtnText}
                      </button>
                    }
                  </div>
                </>
              }

              {type === 'success' &&
                <>

                  <div>
                    <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
                      <CheckIcon aria-hidden="true" className="h-6 w-6 text-green-600" />
                    </div>
                    <div className="mt-3 text-center sm:mt-5">
                      <DialogTitle as="h3" className="text-base font-semibold leading-6 text-gray-900">
                        {title}
                      </DialogTitle>
                      <div className="mt-2">
                        <p className="text-sm text-gray-500">
                          {description}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className={`mt-5 sm:mt-6   sm:gap-3 ${primaryBtnText && secondaryBtnText ? 'sm:grid-cols-2 sm:grid sm:grid-flow-row-dense' : 'flex'}`}>
                    {primaryBtnText &&

                      <button
                        type="button"
                        onClick={primaryBtnOnClick}
                        className="inline-flex w-full justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 sm:col-start-2"
                      >
                        {primaryBtnText}
                      </button>
                    }

                    {secondaryBtnText &&

                      <button
                        type="button"
                        data-autofocus
                        onClick={secondaryBtnOnClick}
                        className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:col-start-1 sm:mt-0"
                      >
                        {secondaryBtnText}
                      </button>
                    }
                  </div>
                </>
              }


            </DialogPanel>
          </div>
        </div>
      </DialogComponent>

    </>
  )
}

export default Dialog