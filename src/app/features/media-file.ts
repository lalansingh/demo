export interface mediaFile {
    trackId: number;
    mediaType: string;
    mediaTitle: string;
    mediaSubTitle: string;
    src: string;
    posterSrc: string;
    posterTitle: string;
    description: string;
    time: string;
    publish: string;
    duration: string;
}

export const AudioFiles = [
    {
        trackId: 0,
        mediaType: 'audio',
        url: 'SampleAudio_0.4mb.mp3',
        mediaTitle: 'Sample Music 1',
        poster: 'mp3poster1.jpg',
        title: 'Symphony 1 - Postrol',
        description: 'The Sixeth Symphony is more the expression of feeling than painting'
    },
    {
        trackId: 1,
        mediaType: 'audio',
        url: 'file_example_MP3_700KB.mp3',
        mediaTitle: 'Sample Music 2',
        poster: 'mp3poster2.jpeg',
        title: 'Symphony 2 - Postrol',
        description: 'The Sixeth Symphony is more the expression of feeling than painting'
    },
    {
        trackId: 2,
        mediaType: 'audio',
        url: 'SampleAudio_0.7mb.mp3',
        mediaTitle: 'Sample Music 3',
        poster: 'mp3poster3.jpeg',
        title: 'Symphony 3 - Postrol',
        description: 'The Sixeth Symphony is more the expression of feeling than painting'
    }
];

export const VedioFiles = [
    {
        trackId: 1,
        mediaType: 'video',
        url: 'SampleVideo_1280x720_1mb.mp4',
        mediaTitle: 'Sample Vedio',
        poster: '',
        title: 'Symphony 6 - Postrol',
        description: 'The Sixeth Symphony is more the expression of feeling than painting'
    }
];

export const VisualizerModel = {
    "wave": {
        wave: true,
        colors: ["rgb(0, 255, 255)", "rgba(0, 255, 255,.2)"]
    },
    "bars": {
        bars: true,
        colors: ["#f32a66", "#f55c57", "#f7a942", "#f8e82f", "#f32a66", "#f55c57", "#f7a942", "#f8e82f"],
        stroke: 4
    },
    "bars_blocks": {
        bars_blocks: true,
        colors: ["#f32a66", "#f55c57", "#f7a942", "#f8e82f"]
    },
    "dualbars": {
        dualbars: true,
        colors: ["#4d9a6c", "#3bbe9c", "#0cb3da", "#1d6b9b"]
    },
    "orbs": {
        orbs: true,
        colors: ["rgba(68, 8, 247,.4)", "rgba(68, 8, 247,1)"]
    },
    "dualbars_blocks": {
        dualbars_blocks: true,
        colors: ["#f32a66", "#f55c57", "#f7a942", "#f8e82f", "#f32a66", "#f55c57", "#f7a942", "#f8e82f"]
    },
    "round_wave": {
        round_wave: true,
        colors: ["#f86300", "#f86300"]
    },
    "shine": {
        shine: true,
        colors: ["#fff", "#111"]
    },
    "ring": {
        ring: true,
        colors: ["#ff1600", "#fe522e44"]
    },
    "flower": {
        flower: true,
        colors: ["#ac3c7c", "#c1653c", "#aac340", "#45bb60", "#429f96", "#459cbe", "#2ab478", "#accf2e", "#ca913e", "#cb4e54"]
    },
    "flower_blocks": {
        flower_blocks: true,
        colors: ["#80f708", "#80f70833"]
    },
    "star": {
        star: true,
        colors: ["#f70880", "#f7088044", "#f8305c"]
    }
};