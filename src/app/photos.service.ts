import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

interface UnsplashResponse {
  urls: {
    regular: string;
  };
}

@Injectable({
  providedIn: 'root',
})
export class PhotosService {
  constructor(private http: HttpClient) {}

  public fetchPhoto() {
    const response = this.http.get<UnsplashResponse>(
      'https://api.unsplash.com//photos/random',
      {
        headers: {
          Authorization:
            'Client-ID IvODud82ygVAVUqsh6Tw5oLyMcw_OcjV0P_Xn39yP2w',
        },
      }
    );
    return response;
  }
}
