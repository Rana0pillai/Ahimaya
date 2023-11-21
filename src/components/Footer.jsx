import { motion } from 'framer-motion';
import { socials } from '../constants';
import { SectionWrapper } from '../hoc';
import { footerVariants } from '../utils/motion';

const Footer = () => (
    <motion.footer
        variants={footerVariants}
        initial='hidden'
        whileInView='show'
        className={`py-8 relative`}
    >
        <div className='footer-gradient'>
            <div className='flex flex-col'>
                <div className='mb-[40px] h-[2px] bg-white opacity-10' />
                <div className='flex items-center justify-between flex-wrap gap-4'>
                    <h5 className='font-extrabold text-[24px] text-white'>Thank you</h5>
                    <p className='font-normal text-[14px] text-white opacity-50'>
                        Copyright ©2023 All Rights Reserved by Ahimaya E-Solutions
                    </p>
                    <div className='flex mb-[10px] gap-4'>
                        {socials.map((social) => (
                            <a href={social.url}>
                                <img
                                    key={social.name}
                                    src={social.src}
                                    alt={social.name}
                                    className='w-[24px] h-[24px] object-contain cursor-pointer'
                                />
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </motion.footer>
);

export default SectionWrapper(Footer, "");