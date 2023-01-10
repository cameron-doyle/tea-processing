export function getBlob(imgFile:File):Promise<Blob>;
export function compress(imgBlob:Blob, quality?:number):Promise<Blob>;
//TODO specify object structure
export function applyRatio(imgBlob:Blob, ratio:float, targetResolution:object):Promise<Blob>; 

export function scale(imgBlob:Blob, px:number, on:string):Promise<Blob>;

//TODO specify object structure
export function crop(imgBlob:Blob, cropOptions:object):Promise<Blob>;

//TODO specify object structure
export function getDimensions(imgBlob:Blob):Promise<object>;
export function getRatio(imgBlob:Blob):Promise<float>;
