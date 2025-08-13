| HTTP Method | Controller | Response | URI          | Use Case               |
|-------------|------------|----------|--------------|------------------------|
| POST        | createTrack     | 201      | /tracks      | Create a track         |
| GET         | getAllTracks      | 200      | /tracks      | List all tracks        |
| GET         | getOneTrack       | 200      | /tracks/:id  | Get a single track     |
| GET         | seeTracksGenre       | 200      | /tracks/genres  | Get a genres from a third party api     |
| PUT         | updateTrack     | 200      | /tracks/:id  | Update a track         |
| DELETE      | deleteTrack     | 200      | /tracks/:id  | Delete a track         |

Third party Api -
- https://musicbrainz.org/ws/2/genre/all?fmt=json
- Documentation : https://musicbrainz.org/doc/MusicBrainz_API
