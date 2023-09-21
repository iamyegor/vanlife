import './host-van-photos.css'
import { useOutletContext } from "react-router-dom";

export default function HostVanPhotos() {
  const { vanDetail } = useOutletContext();
  return (
    <div>
      <img className="host-van-photo" src={vanDetail.imageUrl} />
    </div>
  );
}
