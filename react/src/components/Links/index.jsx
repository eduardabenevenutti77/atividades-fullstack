import "./style.css";

export default function LinksPages() {
    return (
        <>
        <div id="container-video">
            <div>
                <iframe
                    width="420"
                    height="315"
                    src="https://www.youtube.com/embed/3zHMPjQMV7g"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                ></iframe>
            </div>
            <div>
                <iframe
                    width="420"
                    height="315"
                    src="https://www.youtube.com/embed/r5GSFhW3q40"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                ></iframe>
            </div>
            <div>
                <iframe
                    width="420"
                    height="315"
                    src="https://www.youtube.com/embed/Jgegx5BH5xM"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                ></iframe>
            </div>
        </div>
        </>
    );
}
