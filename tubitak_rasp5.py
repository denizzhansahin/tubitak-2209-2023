import time
import cv2
import os
from picamera2 import Picamera2
from libcamera import controls
from ultralytics import YOLO

#veri yolu için zamana göre isimlendirme
veri_yol = ("/"+str(time.strftime('%c'))).replace(" ","-")

#veri yolu ve görüntü kaydetme sırası için yardımcı bir class, sadece veri tutacak
class Veri:
    yol = ""
    counter = 0

#Bir klasör yok ise oluşturma işlemi
if (not os.path.exists(os.getcwd() + veri_yol)):
    os.mkdir(os.getcwd() + veri_yol)

#yolo modeli yükle
model = YOLO("yolov8n.pt")


def goruntu_Tahmin(goruntu_yol):
    model.predict(goruntu_yol, save=True, imgsz=640, conf=0.5, classes=[0]) #640 piksel ile 0.5 doğruluk üstü nesne tespiti ve ssadece ilgili classı incele

#Sürekli çalıştırma alanı
while True:

    #raspberry-camera başlatma
    picam2 = Picamera2()
    picam2.start(show_preview=False)
    #otomatik odaklama
    picam2.set_controls({"AfMode": controls.AfModeEnum.Continuous})


    #kamera dosya kaydetme
    picam2.start_and_capture_file(os.getcwd() + veri_yol + "/" +"image{}.jpg".format(Veri.counter))
    #kamera kapatma
    picam2.close()

    #istediğin değeri yaz ve beklet
    time.sleep(5)

    #tahmin yapma
    goruntu_Tahmin(os.getcwd() + veri_yol + "/" +"image{}.jpg".format(Veri.counter))


    #yolları yazdır
    print("Veri yol")
    print(veri_yol)

    veri_yol_dosya = os.getcwd() + veri_yol + "/" + "image{}.jpg".format(Veri.counter)
    print("veri yol dosya")
    print(veri_yol_dosya)

    """
    Veri.yol = veri_yol_dosya
    cv2.imwrite(veri_yol_dosya,frame)
    """

    Veri.counter += 1


