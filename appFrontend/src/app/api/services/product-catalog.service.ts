/* tslint:disable */
/* eslint-disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpContext } from '@angular/common/http';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { RequestBuilder } from '../request-builder';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';

import { InlineResponse200 } from '../models/inline-response-200';

@Injectable({
  providedIn: 'root',
})
export class ProductCatalogService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation productList
   */
  static readonly ProductListPath = '/get-course-catalog';

  /**
   * Product Catalog.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `productList()` instead.
   *
   * This method doesn't expect any request body.
   */
  productList$Response(params?: {
    context?: HttpContext
  }
): Observable<StrictHttpResponse<InlineResponse200>> {

    const rb = new RequestBuilder(this.rootUrl, ProductCatalogService.ProductListPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<InlineResponse200>;
      })
    );
  }

  /**
   * Product Catalog.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `productList$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  productList(params?: {
    context?: HttpContext
  }
): Observable<InlineResponse200> {

    return this.productList$Response(params).pipe(
      map((r: StrictHttpResponse<InlineResponse200>) => r.body as InlineResponse200)
    );
  }

}
