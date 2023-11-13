import Image from 'next/image'
import IconSearch from '../../public/assets/icon-search.svg'

export function Search() {
    return (
        <div className='flex items-center gap-4'>
            
            <Image
                src={IconSearch}
                alt=''
            />
            <input type="text" className='bg-transparent outline-none text-white placeholder:text-white pr-5' placeholder='Buscar'/>
        </div>
    )
}