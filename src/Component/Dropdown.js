
import { Menu } from '@headlessui/react';


const Dropdown=()=> {
  return (
    <Menu as="div">
      <Menu.Button className="p-2 bg-blue-500 text-white rounded-md">PRODUCTION</Menu.Button>
      <Menu.Items className="absolute right-0 w-48 mt-2 origin-top-right bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
        <Menu.Item>
          {({ active }) => (
            <button
              className={`${
                active ? 'bg-blue-500 text-white' : 'text-gray-900'
              } group flex rounded-md items-center w-full p-2 text-sm`}
            >
              DAILY
            </button>
          )}
        </Menu.Item>
        <Menu.Item>
          {({ active }) => (
            <button
              className={`${
                active ? 'bg-blue-500 text-white' : 'text-gray-900'
              } group flex rounded-md items-center w-full p-2 text-sm`}
            >
             MONTHLY
            </button>
          )}
        </Menu.Item>
      </Menu.Items>
    </Menu>
  );
}

export default Dropdown