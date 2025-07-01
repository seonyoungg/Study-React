import Link from 'next/link';

async function ListItem({ boardType }: { boardType: string }) {
  return (
    <tr className='border-b border-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700 transition duration-300 ease-in-out'>
      <td className='p-2 text-center'>2</td>
      <td className='p-2 truncate indent-4'>
        <Link href={`/${boardType}/1`} className='hover:text-orange-500 hover:underline'>
          {boardType}란?
        </Link>
      </td>
      <td className='p-2 text-center truncate'>용쌤</td>
      <td className='p-2 text-center hidden sm:table-cell'>29</td>
      <td className='p-2 text-center hidden sm:table-cell'>2</td>
      <td className='p-2 truncate text-center hidden sm:table-cell'>2025.06.30 13:39:23</td>
    </tr>
  );
}

export default ListItem;
