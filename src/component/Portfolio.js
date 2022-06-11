import { useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

  // import Swiper JS
import { Swiper, SwiperSlide } from 'swiper/react';
  // import Swiper styles
import 'swiper/css';
import Loading from './Loading';
const Portfolio = () => {
    const navigate = useNavigate();
    const {isLoading,error, data: projects} = useQuery('project', () => 
    fetch('https://limitless-scrubland-86702.herokuapp.com/project',{
        method: "GET",
        headers: {
            'content-type': "applicataion/json"
        }
    }).then(res => res.json())
    )
    if (isLoading) {
        return <Loading />
    }
    if (error) {
        return toast.error(error.message)
    }
const handleDetails= (id) => {
    const path = `/details/${id}`;
    navigate(path);
}
    return (
        <div className='w-11/12 mx-auto' id='protfolio'>
            <div>
                <h2 className='uppercase text-2xl md:text-3xl lg:text-5xl font-bold text-center my-10'>my recent <span className='cl-title'>Project</span></h2>
            </div>
             {/* Slider  */}
               <Swiper
                spaceBetween={50}
                breakpoints={{
                    640:{
                        width: 640,
                        slidesPerView: 1
                    },
                    800:{
                        width: 800,
                        slidesPerView: 2
                    }
                }}
                slidesPerView={1}
                grabCurso={true}
                >
                {
                projects?.map(project =>   <SwiperSlide key={project._id}> <div className="card w-full md:max-w-96 bg-base-100 shadow-xl mb-10 relative">
                <div className='scroll-img'>
                <figure className='w-full h-[250px]' ><img src={project.img1} alt={project.title} /></figure></div>
                <div className="card-body">
                    <h2 className="card-title">{project.title}</h2>
                    <p>{project.description.slice(0,100) + "..."}</p>
                    <div className="card-actions gap-5 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                        <div className="badge badge-outline">{project.tech1}</div> 
                        <div className="badge badge-outline">{project.tech2}</div>
                        <div className="badge badge-outline">{project.tech3}</div>
                        <div className="badge badge-outline">{project.tech4}</div>
                    </div>
                    <div className="card-actions grid grid-cols-2 lg:grid-cols-3">
                    <a href={project.live} target="_blank" rel="noreferrer" className="custome-btn">Live</a>
                    <a href={project.client} target="_blank" rel="noreferrer" className="custome-btn">Code</a>
                    <button className="custome-btn" onClick={() => handleDetails(project._id)}>Details</button>
                    </div>
                </div>
                </div>
            </SwiperSlide>)
            }
                </Swiper>
        </div>
    );
};

export default Portfolio;