/*  
    --algoritma sementara--
    cara algoritma dari pengurutan blok:
        -pertama tama js akan meng acak posisi balok
        -setelah itu js akan menyeleksi blok sesuai tinggi nya
            algoritma penyelskian:
                a. js akan mendeteksi balok dari kanan ke kiri
                    --> ketika di deteksi maka balok akan berwarna merah

                b. apabila js menemukan blok paling tinggi di antara blok lain maka js akan menempatakan blok pada paling kanan container

                c. dan menukar posisi blok yang ada di awal dengan blok yang telah di temukan
                    --> ketika menukar balok, balok akan berwarna merah 

                d. setlah itu js akan mendeteksi dari kanan kembali seperti awal dan menyeleksi yang tinggi nya di bawah blok tertinggi dan di atas tinggi dari blok lain

                c. dan program akan di ulang terus menerus sampai blok teurut

        -dan js akan mengurutkan sesuai tinggi nya dari kanan ke kiri
        
*/