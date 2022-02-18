import React from 'react';

export const BookContext = React.createContext(); //buradaki bookcontext,iletmek istediğimiz veri için bir karar olacaktır.Başlangı değeri oluşturmuş oluyoruz.

class BookContextProvider extends React.Component() {

    state = {
        books: [
            {
                title: "Kırmızı Pazartesi",
                author: "Gabriel Garcia Marquez",
                pageNum: 296,
                imageURL: "https://i.idefix.com/cache/600x600-0/originals/0000000064101-1.jpg",
                topic: "1968-1970 yılları arasında geçen olaylar, o günün toplumsal gerçeklerini de satırlara taşıyor. Ama romanın odağında bu toplumsal olaylar değil üçlü bir aşk var. Gençliğin rüzgârıyla hareketlenen İmkânsızın Şarkısını ölümle erken karşılaşan gençlerin hayatı yönlendiriyor. Hiçbir şeyin önem taşımadığı, amaçsızlığın ağır bastığı, özgür seksin kol gezdiği bir öğrenci hayatı... Ama diğer yanda da yoğun duygular var... İmkânsız aşklar, imkânsız şarkılar söyleten. Hemen hemen her Japon gencinin okuduğu roman anayurdu dışında da çok kişi tarafından sahipleniliyor."
            },
            {
                title: "Şeker Portakalı",
                author: "Jose Muro de Vasconselos",
                pageNum: 200,
                imageURL: "https://i.idefix.com/cache/600x600-0/originals/0000000064031-1.jpg",
                topic: "İrlandalı yazar Bram Stoker’ın, iki taraf arasındaki bu irade ve güç çatışmasını işlediği ve korku edebiyatının başyapıtlarından biri sayılan Dracula, yayımlanmasının üzerinden yüz yılı aşkın süre geçmesine karşın, bugün de aynı ilgiyle okunuyor."
            },
            {
                title: "En Uzun Yüzyıl",
                author: "İlber Ortaylı",
                pageNum: 296,
                imageURL: "https://i.idefix.com/cache/600x600-0/originals/0001744876001-1.jpg",
                topic: "1968-1970 yılları arasında geçen olaylar, o günün toplumsal gerçeklerini de satırlara taşıyor. Ama romanın odağında bu toplumsal olaylar değil üçlü bir aşk var. Gençliğin rüzgârıyla hareketlenen İmkânsızın Şarkısını ölümle erken karşılaşan gençlerin hayatı yönlendiriyor. Hiçbir şeyin önem taşımadığı, amaçsızlığın ağır bastığı, özgür seksin kol gezdiği bir öğrenci hayatı... Ama diğer yanda da yoğun duygular var... İmkânsız aşklar, imkânsız şarkılar söyleten. Hemen hemen her Japon gencinin okuduğu roman anayurdu dışında da çok kişi tarafından sahipleniliyor."
            },
            {
                title: "Dracula",
                author: "Bram Stoker",
                pageNum: 200,
                imageURL: "https://i.idefix.com/cache/600x600-0/originals/0001828853001-1.jpg",
                topic: "İrlandalı yazar Bram Stoker’ın, iki taraf arasındaki bu irade ve güç çatışmasını işlediği ve korku edebiyatının başyapıtlarından biri sayılan Dracula, yayımlanmasının üzerinden yüz yılı aşkın süre geçmesine karşın, bugün de aynı ilgiyle okunuyor."
            },
            {
                title: "Karamazov Kardeşler",
                author: "Fyodor Mihayloviç Dostoyevski",
                pageNum: 200,
                imageURL: "https://i.idefix.com/cache/600x600-0/originals/0001803800001-1.jpg",
                topic: "İrlandalı yazar Bram Stoker’ın, iki taraf arasındaki bu irade ve güç çatışmasını işlediği ve korku edebiyatının başyapıtlarından biri sayılan Dracula, yayımlanmasının üzerinden yüz yılı aşkın süre geçmesine karşın, bugün de aynı ilgiyle okunuyor."
            },
            {
                title: "Sultanın Korsanları",
                author: "Emrah Safa Gürkan",
                pageNum: 296,
                imageURL: "https://i.idefix.com/cache/600x600-0/originals/0001780787001-1.jpg",
                topic: "1968-1970 yılları arasında geçen olaylar, o günün toplumsal gerçeklerini de satırlara taşıyor. Ama romanın odağında bu toplumsal olaylar değil üçlü bir aşk var. Gençliğin rüzgârıyla hareketlenen İmkânsızın Şarkısını ölümle erken karşılaşan gençlerin hayatı yönlendiriyor. Hiçbir şeyin önem taşımadığı, amaçsızlığın ağır bastığı, özgür seksin kol gezdiği bir öğrenci hayatı... Ama diğer yanda da yoğun duygular var... İmkânsız aşklar, imkânsız şarkılar söyleten. Hemen hemen her Japon gencinin okuduğu roman anayurdu dışında da çok kişi tarafından sahipleniliyor."
            }
        ]
    }
    render() {
        return (
            <BookContext.Provider value={this.state}>
                {this.props.children}
            </BookContext.Provider>
        )
    }
}





//console.log(myContext)
export default BookContextProvider;


//verileri context api ile iletmenin iki yolu vardır:
// 1-Default Value (Varsayılan başlangıç değeri tanımlanır ----> İlgili componenta this.context ile iletilir.)
//2-Provider---->Consumer


//1-İlk olarak BookContext içinde ilk iki satır yardımıyla context nesnemizi oluşturduk.Bu context nesnemize başlangıç değeri verip export ettik.Kullanmak istediğimiz componenta import ettik.İmport ettiğimiz componentta context type yardımıyla atadık.This.context yardımıyla veriye ulaştık.
//2-Class comp oluştur ve veriyi içine koyduk.Contexte ait  Provider ile statete bulunan veriyi aldık.this.props.children 