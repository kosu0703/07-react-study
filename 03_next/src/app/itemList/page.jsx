import { Grid } from "@mui/material";
import './itemList.css'
import Link from "next/link";

export default function ItemList({list}){
    return(
        <div>
            <Grid container>
                {
                    list.map((k) => (
                        <Grid item xs={4} key={k.id}>
                            <Link href={'/view/' + k.id} className="item_link">
                                <img alt={k.name} src={k.image_link} className="img_item" />
                                <strong>{k.name}</strong>
                                <span className="txt_info">{k.category} &nbsp; {k.product_type}</span>
                                <strong className="num_price">${k.price}</strong>
                            </Link>
                        </Grid>        
                    ))
                }
            </Grid>
        </div>
    )
}