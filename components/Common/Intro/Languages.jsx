import { Progress } from "antd"
import { useEffect, useState } from "react"

const Languages = () => {
    const [hindi, setHindi] = useState(0)
    const [english, setEnglish] = useState(0)
    const [Punjabi, setPunjabi] = useState(0)

    useEffect(() => {
        const timer = setInterval(() => {
            if (hindi < 98) {
                setHindi(prevCount => prevCount + 1);
            }
            if (Punjabi < 98) {
                setPunjabi(prevCount => prevCount + 1);
            }
            if (english < 88) {
                setEnglish(prevCount => prevCount + 1);
            }
        }, 30);

        return () => clearInterval(timer);
    }, [hindi, english,Punjabi])
    return (
        <div className="flex flex-col space-y-1 pt-6">
            <div className="flex flex-col gap-y-4">
                <span className='text-Snow text-xs font-bold'>Languages</span>
                <div className="flex flex-row items-center justify-center space-x-6">
                    <div className="flex flex-col items-center justify-center gap-y-2">
                        <Progress strokeColor="#1fdf64" type="circle" percent={hindi} size={55} />
                        <span className='text-xs font-bold text-Snow'>Hindi</span>
                    </div>
                    <div className="flex flex-col items-center justify-center gap-y-2">
                        <Progress strokeColor="#1fdf64" type="circle" percent={english} size={55} />
                        <span className='text-xs font-bold text-Snow'>English</span>
                    </div>
                    <div className="flex flex-col items-center justify-center gap-y-2">
                        <Progress strokeColor="#1fdf64" type="circle" percent={Punjabi} size={55} />
                        <span className='text-xs font-bold text-Snow'>Punjabi</span>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Languages