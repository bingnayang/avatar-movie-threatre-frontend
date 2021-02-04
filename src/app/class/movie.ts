import { Cast } from '../class/cast';
import { Writer } from '../class/writer';
import { Director } from '../class/director';
import { Genre } from '../class/genre';
import { Showtime } from '../class/showtime';

export class Movie {
    id: number;
    title: string;
    summary: string;
    releaseDate: string;
    runTime: string;
    rating: string;
    posterURL: string;
    auditorium: string;
    castList: Cast[];
    genreList: Genre[];
    directorName: Director[];
    writerName: Writer[];
    showTime: Showtime[];
}
