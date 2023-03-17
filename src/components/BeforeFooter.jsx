/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { useSettings } from '../context/SettingContext';
import { URL } from '../utils/config';

export default function BeforeFooter() {
    const { settings } = useSettings();
    return (
    // TODO: Ajouter le changement d'image
        <div>
            <section className="relative h-[800px]">
                <div className="flex flex-col items-center h-full relative z-10" />
                {' '}
                <div className="absolute bottom-0 top-0 right-0 left-0 m-auto w-full h-full overflow-hidden">
                    <img src={settings.footer_image !== null ? URL + settings.footer_image : '../dist/images/footer.jpg'} alt="" className="w-full h-full object-cover" />
                </div>
            </section>
        </div>
    );
}
