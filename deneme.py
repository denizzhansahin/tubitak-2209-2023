import time
import cv2
import os
from ultralytics import YOLO

model = YOLO("best.pt")


results = model(["5.jpg","6.jpg"])
sayi=0
# Process results list
for result in results:
    boxes = result.boxes  # Boxes object for bounding box outputs
    result.show()  # display to screen
    print("BAŞLADI")
    print("HEPSİ BOXES")
    print(result.boxes)
    print("TİP")
    print(type(result.boxes))
    print("CLASS BİLGİSİ")
    print(result.boxes.cls)
    print("Toplam süne sayısı : "+str(len(result.boxes.cls)))
    print("CLASS ID BİLGİSİ")
    print(result.boxes.id)
    print("BİTTİ\n\n\n")
    result.save(filename=str(sayi)+".jpg")  # save to disk
    sayi+=1