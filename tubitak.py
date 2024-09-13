import time

import cv2

import os

veri_yol = ("/"+str(time.strftime('%c'))).replace(" ","-")

class Veri:
    yol = ""
    counter = 0

#Bir klasör yok ise oluşturma işlemi
if (not os.path.exists(os.getcwd() + veri_yol)):
    os.mkdir(os.getcwd() + veri_yol)

#Sürekli çalıştırma alanı
while True:
    #kamera başlatma
    cap = cv2.VideoCapture(0)
    ret, frame = cap.read()
    #ilgili klasöre yazdırma
    if ret:
        cv2.imwrite(os.getcwd() + veri_yol + "/" +
                    "image{}.jpg".format(Veri.counter), frame)
        Veri.counter += 1
    time.sleep(5)  # bistediğin değeri yaz ve beklet
    cap.release()
    print("Veri yol")
    print(veri_yol)

    veri_yol_dosya = os.getcwd() + veri_yol + "/" + "image1111{}.jpg".format(Veri.counter)

    print("veri yol dosya")
    print(veri_yol_dosya)

    """
    Veri.yol = veri_yol_dosya
    cv2.imwrite(veri_yol_dosya,frame)
    """


