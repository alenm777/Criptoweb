import React from 'react'
import CambiarTema from './CambiarTema'
import {FaGithub, FaLinkedin, FaWhatsapp, FaTelegram} from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='rounded-div mt-8 pt-8 text-primary'>
        <div className='grid md:grid-cols-2'>
            <div className='flex justify-evenly w-full md:max-w-[300px] uppercase'>
                <div >
                    <h2 className='font-bold'>Soporte</h2>
                    <ul>
                        <li className='text-sm py-2'>Centro de ayuda</li>
                        <li className='text-sm py-2'>Contacto</li>
                        <li className='text-sm py-2'>Estado de la API</li>
                        <li className='text-sm py-2'>Documentación</li>
                    </ul>
                </div>
                <div>
                    <h2 className='font-bold' > Información</h2>
                    <ul>
                        <li className='text-sm py-2'>Sobre nosotros</li>
                        <li className='text-sm py-2'>Carreras</li>
                        <li className='text-sm py-2'>Invertir</li>
                        <li className='text-sm py-2'>Legal</li>
                    </ul>
                </div>
            </div>
            <div className='text-right'>
                <div className='w-full flex justify-end'>
                    <div className='w-full md:w-[300px] py-4 relative'>
                        <div className='flex justify-center md:justify-end py-4 md:py-0 md:pb-4 mt-[-1rem]'>
                            <CambiarTema />
                        </div>
                       <p className='text-center md:text-right'>Suscríbase a las cripto noticias</p> 
                       <div className='py-4'>
                        <form>
    <input className='bg-primary border border-input p-2 mr-2 w-full shadow-xl rounded-2xl md:w-auto' type="email" placeholder='Introduzca su Email' />
    <button className='bg-button text-btnText px-2 p-2 w-full rounded-2xl shadow-xl hover:shadow-1xl md:w-auto my-2'>Regístrate</button>
       </form>
            </div>
            <div className='flex py-4 justify-between text-accent '>
                <FaGithub />
                <FaLinkedin />
                <FaWhatsapp />
                <FaTelegram />
            </div>
                    </div>
                </div>
            </div>
        </div>
        <p className='text-center py-4'>Tecnología de Coin Gecko</p>
    </div>
  );
};

export default Footer;