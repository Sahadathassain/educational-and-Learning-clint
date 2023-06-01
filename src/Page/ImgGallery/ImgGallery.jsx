const ImgGallery = () => {
   return (
     <div className="w-full px-4 py-6 sm:px-6 lg:px-8">
       <div className="text-center py-6">
         <h1 className="font-bold text-4xl">Educational and Learning ImgGallery</h1>
       </div>
       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-7">
         <div className="bg-base-100">
           <img
             className="shadow-2xl w-full h-full rounded-xl"
             src="https://static-01.daraz.com.bd/p/eb9f0a994b3fdcf4aa798979cef9df29.jpg"
             alt=""
           />
         </div>
         <div className="bg-base-100">
           <img
             className="shadow-2xl w-full h-full rounded-xl"
             src="https://static-01.daraz.com.bd/p/60cea3dd7922298350aef90b90be5505.jpg_720x720.jpg_.webps"
             alt=""
           />
         </div>
         <div className="bg-base-100">
           <img
             className="shadow-2xl w-full h-full rounded-xl"
             src="https://m.media-amazon.com/images/I/71uTsfIBmOL._AC_UF894,1000_QL80_.jpg"
             alt=""
           />
         </div>
         <div className="bg-base-100">
           <img
             className="shadow-2xl w-full h-full rounded-xl"
             src="https://i.ebayimg.com/images/g/uswAAOSwp-lkIeI4/s-l1600.jpg"
             alt=""
           />
         </div>
         <div className="bg-base-100">
           <img
             className="shadow-2xl w-full h-full rounded-xl"
             src="https://annainthehouse.com/wp-content/uploads/2021/11/montessori-toddler-toys-3.jpg"
             alt=""
           />
         </div>
         <div className="bg-base-100">
           <img
             className="shadow-2xl w-full h-full rounded-xl"
             src="https://i.ebayimg.com/images/g/G3QAAOSwe61ftbcK/s-l1600.jpg"
             alt=""
           />
         </div>
       </div>
     </div>
   );
 };
 
 export default ImgGallery;
 