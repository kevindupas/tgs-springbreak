/* eslint-disable react/button-has-type */
import { faFaceSmileWink } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

export default function Modal({ setOpenModal, title, description }) {
    return (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity z-50 overflow-y-hidden">

            <div className="fixed inset-0 z-50 overflow-y-hidden">
                <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                    <div className="relative w-full max-w-lg p-4 mx-auto bg-white rounded-md shadow-lg">
                        <div className="mt-3 sm:flex">
                            <div className="mt-2 text-center">
                                <div>
                                    <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-black">
                                        <FontAwesomeIcon icon={faFaceSmileWink} className="text-6xl text-yellow-500" />
                                    </div>
                                    <div className="mt-3 text-center sm:mt-5">
                                        <h3 className="text-base leading-6 text-gray-900 font-bold" id="modal-title">{title}</h3>
                                        <div className="mt-2">
                                            <p className="text-sm text-gray-500 font-bold">{description}</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="items-center gap-2 mt-3 sm:flex">
                                    <button
                                        className="w-full mt-2 p-2.5 flex- bg-blue-500 text-gray-800 font-bold rounded-md outline-none border ring-offset-2 ring-indigo-600 focus:ring-2"
                                        onClick={() => setOpenModal(false)}
                                    >
                                        Continuer la visite
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
