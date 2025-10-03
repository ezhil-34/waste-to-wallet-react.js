import { useMapEvents } from "react-leaflet";
import axios from "axios";

export default function LocationMaker({ setLocation, setAddress }) {

    useMapEvents({
        click: async (e) => {
            const { lat, lng } = e.latlng;
            setLocation({ latitude: lat, longitute: lng});
            try{
                const res = await axios.get(
                   `https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lng}&format=json`
                );
                setAddress(res.data.display_name);

            }catch (err) {
                console.error("Error fetching address",err);
            }
        },
    });

    return null;
}