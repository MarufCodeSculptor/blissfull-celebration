import { Icon } from '@iconify/react';
import brushIcon from '@iconify-icons/fa-solid/brush';
import checkCircleIcon from '@iconify-icons/fa-solid/check-circle';
import phoneIcon from '@iconify-icons/fa-solid/phone';
import creditCardIcon from '@iconify-icons/fa-solid/credit-card';
import mobileIcon from '@iconify-icons/fa-solid/mobile';
import pageIcon from '@iconify-icons/fa-solid/file-alt';
const SpecialFetures = () => {
  const specialServices = [
    {
      title: 'Personalized Event Planning',
      message:
        'Our dedicated event planners work with you to create bespoke events tailored to your vision. From concept to execution, we ensure every detail is perfect.',
      icon: brushIcon,
    },
    {
      title: 'Verified Service Providers',
      message:
        'We partner with only the most reliable and highly rated service providers to ensure your event is a success. All providers are thoroughly vetted and reviewed.',
      icon: checkCircleIcon,
    },
    {
      title: '24/7 Customer Support',
      message:
        'Our support team is available around the clock to assist you with any questions or issues. We are here to make sure your event runs smoothly.',
      icon: phoneIcon,
    },
    {
      title: 'Secure Online Payments',
      message:
        'With our secure payment gateway, you can book and pay for services with confidence. We offer various payment options and an escrow service for added security.',
      icon: creditCardIcon,
    },
    {
      title: 'Real-Time Updates and Notifications',
      message:
        'Stay informed with real-time updates and notifications for all your event-related activities. Get instant alerts for new job postings, offers, and messages.',
      icon: mobileIcon,
    },
    {
     title: 'Customizable Event Pages',
     message:
       'Create personalized event pages with our easy-to-use tools. Showcase your event with photo and video galleries, and provide all the details your attendees need in one place.',
     icon: pageIcon,
   }
  ];

  return (
    <div className="min-h-screen my-20  flex items-center justify-center p-5">
      <div>
        <div className="flex items-center justify-center">
          <div>
            <div className="flex items-center justify-center">
              <span className="bg-pink-200 rounded-lg px-3 py-2  text-center font-bold ">
                Features
              </span>
            </div>
            <h2 className="text-5xl font-bold capitalize mt-4 tracking-widest whitespace-break-spaces	">
              our <span className="text-purple-600">special</span> features
            </h2>
          </div>
        </div>
        {/* card container =>=>=>*/}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-10">
          {specialServices.map((service, index) => (
            <div key={index} className="flex">
              <div className="flex flex-col bg-blue-200 shadow-lg p-6 rounded-lg flex-1">
                <div className='flex items-center justify-center'>
                  <Icon
                    icon={service.icon}
                    width="100"
                    height="100"
                    className="mb-4 text-green-500"
                  />
                </div>
                <h5 className="text-xl font-bold mb-2">{service.title}</h5>
                <p className="text-gray-600 text-sm">{service.message}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SpecialFetures;
