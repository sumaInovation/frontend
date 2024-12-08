import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'

export default function Example(prop) {
    const {option,items}=prop
  return (
    <Menu as="div" className="relative inline-block text-left lg:m-2 ">
      <div>
        <MenuButton className=" text-white inline-flex w-full justify-center gap-x-1.5 rounded-md  px-3 py-2 text-sm font-semibold  shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-slate-500">
          {option}
          <ChevronDownIcon aria-hidden="true" className="-mr-1 size-5 text-gray-400" />
        </MenuButton>
      </div>

      <MenuItems
        transition
        className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black/5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
      >
        <div className="py-1 bg-white rounded-xl">
          
           
         { items.map((item, index) => (
            <MenuItem>
          <a key={index} href={item.path} className="block px-4 py-2">
            {item.name}
          </a>
          </MenuItem>
        ))}
          
         </div>
      </MenuItems>
    </Menu>
  )
}





