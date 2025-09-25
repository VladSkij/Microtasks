
type topCarsType = {
    manufacturer: string,
    model: string,
}

export const MikrotaskOne = ()=>{

    const topCars:topCarsType[] = [
        { manufacturer: 'BMW', model: 'm5cs' },
        { manufacturer: 'Mercedes', model: 'e63s' },
        { manufacturer: 'Audi', model: 'rs6' },
    ]

    return (

           <table>
                <tbody>
                {topCars.map((cars,index)=>{
                    return (
                        <tr key={index}>
                            <td>{cars.manufacturer}</td>
                            <td>{cars.model}</td>
                        </tr>
                    )
                })}
                {/*{topCars.map((car) => (*/}
                {/*    <tr key={car.model}>*/}
                {/*        <td>{car.manufacturer}</td>*/}
                {/*        <td>{car.model}</td>*/}
                {/*    </tr>*/}
                {/*))}*/}
                </tbody>
           </table>

    )
}