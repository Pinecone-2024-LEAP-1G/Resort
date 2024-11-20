import { HostModel } from "@/lib/models/host.model";

export const GET = async () => {
    try {
        const host = await HostModel.find();

        return Response.json({host});
    } catch (error) {
        return Response.json ({ message: error})
    }
}