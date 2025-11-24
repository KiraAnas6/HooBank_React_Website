import { clients } from "../constants"

const Companies = () => {
    return <div className="flex items-center justify-evenly py-8">
        {clients.map((client) => {
            return <img src={client.logo} className="w-[20%]" alt="logo" />
        })}
    </div>
}

export default Companies;