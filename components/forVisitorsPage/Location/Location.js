import { GoogleMap, useLoadScript, MarkerF } from '@react-google-maps/api'
import Link from 'next/link'
import {
    Inner,
    Title,
    Grid,
    MapContainer,
    DetailsContainer,
    Map,
    DetailsTitle,
    SubTitle,
    Text,
    ButtonContainer,
    Item,
} from './Elements'

const Location = ({ language }) => {

    const location = { lat: 52.49649, lng: 13.45429 }

    const { isLoaded } = useLoadScript({
        googleMapsApiKey: "AIzaSyC_3CAWukuh2eb3KeN7GWl9nr_9k7MyuTs"
    })

    return (
        <Inner>
            <Grid>
                <MapContainer>
                    <Map>
                        {
                            isLoaded ?
                                <GoogleMap
                                    zoom={12}
                                    center={location}
                                    mapTypeId={google.maps.MapTypeId.ROADMAP}
                                    mapContainerStyle={{ width: '100%', height: '100%' }}
                                >
                                    <MarkerF position={location} />
                                </GoogleMap> : null
                        }
                    </Map>
                </MapContainer>
                <DetailsContainer>
                    <DetailsTitle>Location</DetailsTitle>
                    <SubTitle>
                        Arena Berlin
                        Eichenstr. 4,<br></br> 12435 Berlin
                    </SubTitle>
                    <Item>
                        <Text><span>Parking garage of Allianz Tower:</span></Text>
                        <Text>Entrance Martin-Hoffmann-Str. 18, 12435 Berlin</Text>
                    </Item>
                    <Item>
                        <Text><span>U-Bahn:</span></Text>
                        <Text>Line U1: U-Bhf Schlesisches Tor + 10 min. walk</Text>
                    </Item>
                    <Item>
                        <Text><span>S-Bahn:</span></Text>
                        <Text>Lines S8, S85, S9, S42, S41: S-Bhf Treptower Park + 5 min. walk</Text>
                    </Item>
                    <Item>
                        <Text><span>Bus:</span></Text>
                        <Text>Lines 104, 194, 265, N65: Eichenstr./Puschkinallee</Text>
                    </Item>
                    <Item>
                        <Text><span>Parking:</span></Text>
                        <Text>There is free & paid parking in the immediate vicinity.</Text>
                    </Item>
                </DetailsContainer>
            </Grid>
        </Inner>
    )
}

export default Location