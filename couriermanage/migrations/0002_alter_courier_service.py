# Generated by Django 4.2.1 on 2023-08-11 19:57

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('couriermanage', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='courier',
            name='service',
            field=models.CharField(choices=[('Comone Express', 'Comone Express'), ('Direct Freight Express', 'Direct Freight Express'), ('Dex-i Express', 'Dex-i Express'), ('Leopards Express', 'Leopards Express'), ('Dpe Express', 'Dpe Express'), ('Dpex Express', 'Dpex Express'), ('Toll Express', 'Toll Express'), ('Skynet Express', 'Skynet Express'), ('Pos Malaysia', 'Pos Malaysia'), ('Airpak Express', 'Airpak Express'), ('Citylink Express', 'Citylink Express'), ('GD Express', 'GD Express'), ('MyPoz', 'MyPoz'), ('Matdespatch Express', 'Matdespatch Express'), ('LineClear Express', 'LineClear Express'), ('KTMD Malaysia', 'KTMD Malaysia'), ('FMX', 'FMX'), ('WePost', 'WePost'), ('TNT Express', 'TNT Express'), ('UPS Express', 'UPS Express'), ('ZeptoExpress', 'ZeptoExpress'), ('Pgeon Delivery', 'Pgeon Delivery'), ('Roadbull', 'Roadbull'), ('LWE', 'LWE'), ('SPC', 'SPC'), ('DHL Ecommerce', 'DHL Ecommerce'), ('DD Express', 'DD Express'), ('Asiaxpress', 'Asiaxpress'), ('Quantium Solutions', 'Quantium Solutions'), ('M Xpress', 'M Xpress'), ('Collectco', 'Collectco'), ('Postco', 'Postco'), ('DropIt', 'DropIt'), ('Zoom', 'Zoom'), ('Motorex', 'Motorex'), ('EasiPass', 'EasiPass'), ('Pickupp', 'Pickupp'), ('Qxpress', 'Qxpress'), ('UrbanFox', 'UrbanFox'), ('J&T Express', 'J&T Express'), ('Near U', 'Near U'), ('May Express', 'May Express'), ('Amber Courier', 'Amber Courier'), ('Ping U', 'Ping U'), ('Janio', 'Janio'), ('Shopee Express', 'Shopee Express'), ('Best Express', 'Best Express'), ('SeeBuu Logistics', 'SeeBuu Logistics'), ('Yunda Express', 'Yunda Express'), ('XendNow', 'XendNow'), ('TheLorry', 'TheLorry'), ('Parcel To Post', 'Parcel To Post'), ('ZTO Express', 'ZTO Express'), ('Posstore', 'Posstore'), ('Flickpost', 'Flickpost'), ('Mantap Express', 'Mantap Express'), ('YM Global', 'YM Global'), ('BabyXpress', 'BabyXpress'), ('ENF Express', 'ENF Express'), ('ML Express', 'ML Express'), ('TMT Express', 'TMT Express'), ('Macrolink Express', 'Macrolink Express'), ('Flash Express', 'Flash Express'), ('Radian', 'Radian'), ('Sendy Express', 'Sendy Express'), ('iSend Logistics', 'iSend Logistics'), ('Parcelhub', 'Parcelhub'), ('Post2u', 'Post2u'), ('JS Empire Express', 'JS Empire Express'), ('Arriival', 'Arriival'), ('BumiX', 'BumiX'), ('Yuanda Express', 'Yuanda Express'), ('BrightStar', 'BrightStar'), ('uParcel', 'uParcel'), ('Jomkirim', 'Jomkirim'), ('Teleport', 'Teleport'), ('J&T Cargo', 'J&T Cargo')], max_length=30),
        ),
    ]
