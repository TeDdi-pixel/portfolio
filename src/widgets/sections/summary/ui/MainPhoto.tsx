import {m} from 'framer-motion'
import { imgWrapperConfig } from '../config/imgWrapper'
const MainPhoto = () => {
  return (
    <m.div
          className="flex-shrink-0 max-w-[280px] max-h-[280px] w-full h-full xl:max-w-[380px] xl:max-h-[380px] rounded-full overflow-hidden relative"
          {...imgWrapperConfig}
        >
          <img
            src="./main_photo.webp"
            alt="main_photo"
            className="object-cover max-w-[280px] max-h-[280px]  xl:max-w-[380px] xl:max-h-[380px] w-full h-full"
          />
        </m.div>
  )
}

export default MainPhoto
