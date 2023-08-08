import ShopNavbar from "../Product/ShopNavbar"

const TermsAndPolicy = () => {
    const PolicyList = [
        {
            Title: 'Information Collection and Use',
            Content: 'While using our Service, we may ask you to provide us with certain personally identifiable information that can be used to contact or identify you. Personally identifiable information may include, but is not limited to, your name, email address, phone number, and postal address ("Personal Information").',
        },
        {
            Title: 'Log Data',
            Content: `We collect information that your browser sends whenever you visit our Service ("Log Data"). This Log Data may include information such as your computer's Internet Protocol ("IP") address, browser type, browser version, the pages of our Service that you visit, the time and date of your visit, the time spent on those pages, and other statistics.`,
        },
        {
            Title: 'Cookies',
            Content: `Cookies are files with a small amount of data, which may include an anonymous unique identifier. Cookies are sent to your browser from a web site and stored on your computer's hard drive.`,
            Content1: `We use "cookies" to collect information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our Service.`
        },
        {
            Title: 'Service Providers',
            Content: `We may employ third-party companies and individuals to facilitate our Service, to provide the Service on our behalf, to perform Service-related services, or to assist us in analyzing how our Service is used.`,
        },
        {
            Title: 'Security',
            Content: 'The security of your Personal Information is important to us, but remember that no method of transmission over the Internet, or method of electronic storage, is 100% secure. While we strive to use commercially acceptable means to protect your Personal Information, we cannot guarantee its absolute security.',
        },
        {
            Title: 'Changes to This Privacy Policy',
            Content: 'This Privacy Policy is effective as of [Date] and will remain in effect except with respect to any changes in its provisions in the future, which will be in effect immediately after being posted on this page.',
            Content1: `We reserve the right to update or change our Privacy Policy at any time and you should check this Privacy Policy periodically. Your continued use of the Service after we post any modifications to the Privacy Policy on this page will constitute your acknowledgment of the modifications and your consent to abide and be bound by the modified Privacy Policy.`
        },
    ]
    const TermsList = [
        {
            Title: 'Purchases',
            Content: 'If you wish to purchase any product or service made available through the Service ("Purchase"), you may be asked to supply certain information relevant to your Purchase, including your personal and payment information. Please review our Privacy Policy for more details on how we handle your information.',
        },
        {
            Title: 'Returns and Exchanges',
            Content: 'We strive to provide quality products. If you are not satisfied with your purchase, please refer to our Return and Exchange Policy for information on the process and conditions for returning or exchanging products.',
        },
        {
            Title: 'Shipping and Delivery',
            Content: 'Please review our Shipping and Delivery Policy for information about shipping methods, estimated delivery times, and shipping costs.',
        },
        {
            Title: 'Product Descriptions',
            Content: `We make every effort to accurately display the colors and dimensions of our products. However, variations may occur, and we cannot guarantee that your device's display accurately reflects the actual colors and dimensions of the products.`,
        },
        {
            Title: 'Intellectual Property',
            Content: 'The Service and its original content, features, and functionality are owned by Vior and are protected by international copyright, trademark, patent, trade secret, and other intellectual property or proprietary rights laws.',
        },
        {
            Title: 'Links To Other Web Sites',
            Content: 'Our Service may contain links to third-party web sites or services that are not owned or controlled by Vior. We have no control over, and assume no responsibility for, the content, privacy policies, or practices of any third-party web sites or services. You further acknowledge and agree that Vior shall not be responsible or liable, directly or indirectly, for any damage or loss',
        },
    ]
    return(
        <div>
            <ShopNavbar/>
            <div className="w-full flex flex-col justify-center items-center py-8">
            <h1 className="font-bold text-2xl md:text-5xl font-Robot text-gray-600">Terms & Policy</h1>
                <div className="w-full  flex justify-center py-6 px-6">
                    <div className="flex flex-col max-w-[1000px] justify-center text-gray-600 text-xs sm:text-sm md:text-md">
                        <div className="grid grid-cols-stretch font-Robot">
                            <div className="py-8 flex flex-col gap-2">
                                <h1 className="w-full text-left font-bold text-lg md:text-3xl">Terms of Service</h1>
                                <h2 className="">Please read these Terms and Conditions ("Terms", "Terms and Conditions") carefully before using Vior Furniture Business Shop website or mobile application (the "Service") operated by Vior ("us", "we", or "our").
                                </h2>
                                <h2>
                                Your access to and use of the Service is conditioned upon your acceptance of and compliance with these Terms. These Terms apply to all visitors, users, and others who wish to access or use the Service.
                                </h2>
                                <h2>
                                By accessing or using the Service, you agree to be bound by these Terms. If you disagree with any part of the terms, then you do not have permission to access the Service
                                </h2>
                                <hr className="w-full border border-gray-200"/>
                            </div>
                            <div className="flex flex-col gap-2">
                                {
                                    TermsList.map((val) => (
                                        <div className="flex flex-row gap-2 py-2">
                                            <div className="w-fit md:py-[6px]">
                                                <box-icon type='solid' name='right-arrow' size='16px'></box-icon>
                                            </div>
                                            <div className="flex flex-col gap-1">
                                                <h1 className="text-md md:text-xl font-bold">{val.Title}</h1>
                                                <p>{val.Content}</p>
                                            </div>
                                        </div>
                                        
                                    ))
                                }
                            </div>
                            <hr className="w-full border border-gray-200"/>
                        </div>
                        <div className="grid grid-cols-stretch font-Robot">
                            <div className="py-8 flex flex-col gap-2">
                                <h1 className="w-full text-left font-bold text-lg md:text-3xl">Privacy Policy </h1>
                                <h2 className="">Vior ("us", "we", or "our") operates the Vior Furniture Business Shop website and mobile application (the "Service"). This page informs you of our policies regarding the collection, use, and disclosure of Personal Information we receive from users of the Service.
                                </h2>
                                <h2>                     
                                By using the Service, you agree to the collection and use of information in accordance with this policy.
                                </h2>

                                <hr className="w-full border border-gray-200"/>
                            </div>
                            <div className="flex flex-col gap-2">
                                {
                                    PolicyList.map((val) => (
                                        <div className="flex flex-row gap-2 py-2">
                                            <div className="w-fit py-1">
                                                <box-icon type='solid' name='right-arrow' size='20px'></box-icon>
                                            </div>
                                            <div className="flex flex-col gap-2">
                                                <h1 className="text-md md:text-xl font-bold">{val.Title}</h1>
                                                <p>{val.Content}</p>
                                                <p>{val.Content1}</p>
                                            </div>
                                        </div>
                                        
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TermsAndPolicy