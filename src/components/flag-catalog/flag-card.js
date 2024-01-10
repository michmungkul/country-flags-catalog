export default function FlagCard(props){
    return (
        <>
            <div className="max-w-sm rounded overflow-hidden shadow-lg">
                <img className="w-full" src={props.country.flags.svg} alt='country.country.flags.alt' />
                <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2">{props.country.name.official}</div>
                    <div className="flex">
                        <div className="flex-1 text-base py-1"><label className="text-gray-500">CCA2</label>: {props.country.cca2}</div>
                        <div className="flex-1 text-base py-1"><label className="text-gray-500">CCA3</label>: {props.country.cca3}</div>
                    </div>
                    <div className="text-base py-1"><label className="text-gray-500">Calling code</label> : {props.country.idd.root}</div>
                    <div className="text-base py-1"><label className="text-gray-500">Native Name</label> :</div>
                    {Object.keys(props.country.name.nativeName || {}).length > 0 && Object.keys(props.country.name.nativeName || {})?.map((e,i) => (
                        <>
                            {/* <div><label className="capitalize">{e} common</label> : {props.country.name.nativeName[e].common}</div> */}
                            <div key={i.toString()}><label className="capitalize">{e}</label> : {props.country.name.nativeName[e].official}</div>
                        </>
                    ))}
                    <div className="text-base py-1"><label className="text-gray-500">Alternative Name</label>: </div>
                            {props.country.altSpellings.map((nativeName) => 
                            <span className="inline-block bg-gray-200 rounded px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{nativeName}</span>)}
                </div>
            </div>
        </>
    );
}