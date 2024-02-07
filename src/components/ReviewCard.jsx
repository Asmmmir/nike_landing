import { star } from "../assets/icons"

const ReviewCard = ({imgURL, feedback, rating, customerName}) => {
  return (
    <div className="flex justify-center items-center flex-col">
        <img className="rounded-full object-cover w-[120px] h-[120px]" src={imgURL} alt='Customer' />
        <p className="mt-6 max-w-sm text-center info-text">{feedback}</p>
        <div className="flex justify-center items-center gap-2">
            <img className="object-contain m-0" src={star} width={24} height={24} alt="star" />
            <p className="text-xl font-montserrat text-slate-grey">{rating}</p>
        </div>
        <h3 className="font-bold text-center font-palanquin text-2xl mt-2">{customerName}</h3>
    </div>
  )
}

export default ReviewCard