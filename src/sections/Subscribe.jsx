import Button from '../components/Button'

const Subscribe = () => {
  return (
    <section id="contact-us" className="max-container flex justify-between items-center max-lg:flex-col gap-10">
        <h3 className="text-4xl leading-[68px] lg:max-w-md font-palanquin font-bold">Sign Up from <span className='text-coral-red'>Updates</span> & Newsletter</h3> 
        <div className='lg:max-w-[40%] w-full flex items-center gap-5 p-2.5 sm:border max-sm:flex-col sm:border-slate-grey rounded-full'>
          <input type="text" placeholder="subscribe@gmail.com" className="input" />
        <div className='flex max-sm:justify-end items-center max-sm:w-full'>
          <Button label='Subscribe' fullWidth={true} />
        </div>
        </div>
    </section>
  )
}

export default Subscribe