import {Card, CardContent, CardFooter} from "@/components/ui/card.tsx";

function VideoCard () {
    return (
        <Card>
            <CardContent>
                <div style={{paddingTop: "1.5rem"}}></div>
                    <iframe
                        src="https://drive.google.com/file/d/1Slla15S0s49fyLKJGiUTueMsSU4WJweO/preview"
                        width="100%"
                        height="100%"
                        allow="autoplay; fullscreen"
                        allowFullScreen
                        style={{borderRadius: "5px"}}
                    ></iframe>
            </CardContent>
            <CardFooter>
                <h3>Wunsdorf 1997</h3>
            </CardFooter>
        </Card>
    )
}

export default VideoCard