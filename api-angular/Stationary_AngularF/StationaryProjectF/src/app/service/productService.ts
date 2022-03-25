
import {Injectable} from '@angular/core';
import {Product_Information } from '../Model/Product_Information';
import {HttpClient} from '@angular/common/http';

@Injectable()

export class productService
{

    productList : Product_Information[] = new Array<Product_Information>();
    http: HttpClient;
    baseUrl: string='https://localhost:44324';
    constructor(_http: HttpClient)
    {

            this.http=_http;

    }

    getData ()

    {

       return this.http.get(this.baseUrl+'/api/Product_Information')
    }


    insertData(p: Product_Information)
    {


       return  this.http.post(this.baseUrl+'/api/Product_Information', p );
    }

    updateData(p: Product_Information)
    {
        this.http.put(this.baseUrl+'/api/Product_Information/'+ p.Product_Id, p ).subscribe(data=> 
            {
                var JsonData = JSON.parse(JSON.stringify(data));
            });

    }

    deleteData(p: Product_Information)
    {
        this.http.delete(this.baseUrl+'/api/Product_Information/'+ p.Product_Id ).subscribe(data=> 
            {
                var JsonData = JSON.parse(JSON.stringify(data));
            });

    }


}