import {
    Footer,
    FooterBrand,
    FooterCopyright,
    FooterDivider,
    FooterIcon,
    FooterLink,
    FooterLinkGroup,
    FooterTitle,
} from 'flowbite-react';
export default function FooterComponent() {
    return (
        <div className="bg-blue-800 p-4 bottom-0">
            <Footer className="container mx-auto w-full bg-primary">
                <div className="w-full">
                    <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
                        <div>
                            <FooterBrand
                                href="https://flowbite.com"
                                src="https://istad.co/resources/img/logo_md.png"
                                alt="Flowbite Logo"
                                className=''
                            />
                            <span className='text-white'>CSTAD</span>
                            <p className='text-white'>Start your IT career with CSTAD</p>
                        </div>

                        <div>
                            <FooterTitle className="text-white" title="about"/>
                            <FooterLinkGroup col className='text-white'>
                                <FooterLink href="#">Flowbite</FooterLink>
                                <FooterLink href="#">Tailwind CSS</FooterLink>
                            </FooterLinkGroup>
                        </div>
                        <div>
                            <FooterTitle className="text-white" title="Follow us"/>
                            <FooterLinkGroup col className='text-white'>
                                <FooterLink href="#">Github</FooterLink>
                                <FooterLink href="#">Discord</FooterLink>
                            </FooterLinkGroup>
                        </div>
                        <div>
                            <FooterTitle className="text-white" title="Legal"/>
                            <FooterLinkGroup col className='text-white'>
                                <FooterLink href="#">Privacy Policy</FooterLink>
                                <FooterLink href="#">Terms &amp; Conditions</FooterLink>
                            </FooterLinkGroup>
                        </div>

                    </div>
                    <FooterDivider/>
                    <div className="w-full grid place-content-center sm:items-center">

                        <FooterCopyright className="text-white"
                                         by="Center of Science and Technology Advanced Development | All Rights Reserved™"
                                         year={2022}/>

                        {/*<div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">*/}
                        {/*    <FooterIcon href="#" icon={BsFacebook}/>*/}
                        {/*    <FooterIcon href="#" icon={BsInstagram}/>*/}
                        {/*    <FooterIcon href="#" icon={BsTwitter}/>*/}
                        {/*    <FooterIcon href="#" icon={BsGithub}/>*/}
                        {/*    <FooterIcon href="#" icon={BsDribbble}/>*/}
                        {/*</div>*/}
                    </div>
                </div>
            </Footer>
        </div>
    );
}