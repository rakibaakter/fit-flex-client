import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import PageBanner from "../../../Component/PageBanner";
import TrainerCard from "../TrainerComponent/TrainerCard";

const Trainers = () => {
  const axiosPublic = useAxiosPublic();

  const { data: trainers = [] } = useQuery({
    queryKey: ["trainers"],
    queryFn: async () => {
      const res = await axiosPublic.get("/trainers");
      return res.data;
    },
  });
  //   console.log(trainers);

  return (
    <div>
      <PageBanner title="Our Trainers" />
      <div className=" px-4 md:px-12 lg:px-32">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 my-16 ">
          {trainers.map((trainer) => (
            <TrainerCard key={trainer._id} trainer={trainer} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Trainers;
