
import dayjs from 'dayjs'
function JobCard() {
    const skills=["javaScript" ,"RactJs", "Nodejs", "MySQL"]
    const date1 = dayjs(Date.now());
    const diffInDays = date1.diff('2023-12-31','day');
  return (
    <div className='mx-40 mb-4'>
      <div className='flex justify-between items-center px-6 py-4 bg-zinc-200 rounded-md border border-black shadow-lg hover:border-blue-500 hover:translate-y-1 hover:scale-103'>
        <div className='flex flex-col items-start gap-3'>
<h1  className='text-lg font-semibold'>frontend Web -Amazon</h1>
<p>Full Time &#x2022; Fresher &#x2022; In office</p>
<div className='flex items-center gap-2'>
{skills.map((skills)=>{
    <p className='text-gray-500 py-1 px-2 rounded-md border border-black'>{skills}</p>
}
)}
</div>
        </div>
        <div className='flex items-center gap-4'>
<p className='text-gray-500'>Posted {diffInDays > 1? `${diffInDays} days`: `${diffInDays} day`} ago  Date</p>
<a>
<button className='text-blue-500 border border-blue-500 px-10 py-2 rounded-md'>Apply</button>
</a>
        </div>
      </div>
    </div>
  )
}

export default JobCard
