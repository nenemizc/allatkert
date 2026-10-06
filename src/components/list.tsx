type ListaProps = {
    cim: string;
    adat: string[];
}

export default function List(props: ListaProps) {
    return (
            <div className="col-sm-4 kartya">
                <h2>{props.cim}</h2>

                <ul className="list-group">
                    {props.adat.map((elem, index) => (
                        <li key={index} className="list-group-item">
                            {elem}
                        </li>
                    ))}
                </ul>
            </div>
    );
}