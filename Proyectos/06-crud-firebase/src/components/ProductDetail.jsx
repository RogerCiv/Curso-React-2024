// components/ProductDetail.js

import React, { useState, useEffect } from 'react';

const ProductDetail = () => {



  return (
    <section className="bg-gray-100">
      <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
          <div className="lg:col-span-2 lg:py-12">
            <div className="mt-8">
              <a href={product.url} target='_blank' rel="noopener noreferrer" className="text-2xl font-bold text-pink-600"> {product.name} </a>

              <p className="mt-2 not-italic">{product.description}</p>
              <p><span>Stock:</span>{product.stock}</p>
              <img src={product.url} alt="imagen del producto" />
            </div>
          </div>

          <div className="rounded-lg bg-white p-8 shadow-lg lg:col-span-3 lg:p-12">
            <form onSubmit={handleUpdateSubmit} className="space-y-4">
              <div>
                <label className="sr-only" htmlFor="name">Nombre</label>
                <input
                  className="w-full rounded-lg border-gray-200 p-3 text-sm"
                  placeholder="Nuevo nombre  del producto"
                  type="text"
                  id="name"
                  value={productValues.name} 
                  onChange={(e) => setProductsValues({ ...productValues, name: e.target.value })}
                />
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label className="sr-only" htmlFor="url">URL Producto</label>
                  <input
                    className="w-full rounded-lg border-gray-200 p-3 text-sm"
                    placeholder="Nueva url del producto"
                    type="text"
                    id="url"
                    value={productValues.url}
                    onChange={(e) => setProductsValues({ ...productValues, url: e.target.value })}
                  />
                </div>

                <div>
                  <label className="sr-only" htmlFor="stock">Stock</label>
                  <input
                    className="w-full rounded-lg border-gray-200 p-3 text-sm"
                    placeholder="Nuevo stock del producto"
                    type="number"
                    id="stock"
                    value={productValues.stock}
                    onChange={(e) => setProductsValues({ ...productValues, stock: e.target.value })}
                  />
                </div>
              </div>
              <div>
                <label className="sr-only" htmlFor="description">Descripción</label>

                <textarea
                  className="w-full rounded-lg border-gray-200 p-3 text-sm"
                  placeholder="Nueva descripción del producto"
                  rows="8"
                  id="description"
                  value={productValues.description}
                  onChange={(e) => setProductsValues({ ...productValues, description: e.target.value })}
                ></textarea>
              </div>

              <div className=" flex mt-4 gap-2">
                <button
                  type="submit"
                  className="inline-block w-full rounded-lg bg-black px-5 py-3 font-medium text-white sm:w-auto"
                >
                  Update
                </button>
              
              </div>
            </form>
                <button className=" mt-6 inline-block w-full rounded-lg bg-pink-500 px-5 py-3 font-medium text-white sm:w-auto" onClick={() => navigate(-1)}>Volver</button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProductDetail;