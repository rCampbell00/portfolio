import Image from "next/image";
import { Card, CardContent, CardTitle } from "./ui/card";

type TechCardProps = {
    techName: string,
    imageSrc: string,
    darkimg?: string,
}

export default function TechCard({techName, imageSrc, darkimg}: TechCardProps) {
    return (
        <Card className="p-2 md:h-[120px] h-[80px] w-full bg-white transition-all duration-300 ease-in-out hover:shadow-lg">
            <CardTitle>
                {techName}
            </CardTitle>
            <CardContent className="flex justify-center content-center align-center h-3/4 align-middle p-2">
            {darkimg? 
                <>
                    <Image src={`${imageSrc}`} className="block dark:hidden" alt="Technology Img" width={60} height={60}/>
                    <Image src={`${darkimg}`} className="hidden dark:block" alt="Technology Img" width={60} height={60}/>
                </>
                : 
                <Image src={`${imageSrc}`} alt="Technology Img" width={60} height={60}/>
                }
                
            </CardContent>
        </Card>
    )
}