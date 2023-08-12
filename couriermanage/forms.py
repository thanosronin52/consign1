

from django import forms
from django.utils.html import format_html

class ImageSelect(forms.Select):
    def __init__(self, attrs=None, choices=(), images=None):
        self.images = images
        super().__init__(attrs, choices)
    
    def render_option(self, selected_choices, option_value, option_label):
        option_html = super().render_option(selected_choices, option_value, option_label)
        
        if self.images and option_value in dict(self.choices):
            image_url = self.images.get(option_value, '')
            if image_url:
                option_html = format_html(
                    '<option data-img-src="{}" value="{}"{}>{}</option>',
                    image_url, option_value,
                    ' selected="selected"' if option_value in selected_choices else '',
                    option_label
                )
        return option_html

class SearchCourierForm(forms.Form):
    tracking_id = forms.CharField(label='Tracking ID', max_length=255, required=True)
    TRACKING_SERVICE = (
    ("Comone Express", "Comone Express"),
    ("Direct Freight Express", "Direct Freight Express"),
    ("Dex-i Express", "Dex-i Express"),
    ("Leopards Express", "Leopards Express"),
    ("Dpe Express", "Dpe Express"),
    ("Dpex Express", "Dpex Express"),
    ("Toll Express", "Toll Express"),
    ("Skynet Express", "Skynet Express"),
    ("Pos Malaysia", "Pos Malaysia"),
    ("Airpak Express", "Airpak Express"),
    ("Citylink Express", "Citylink Express"),
    ("GD Express", "GD Express"),
    ("MyPoz", "MyPoz"),
    ("Matdespatch Express", "Matdespatch Express"),
    ("LineClear Express", "LineClear Express"),
    ("KTMD Malaysia", "KTMD Malaysia"),
    ("FMX", "FMX"),
    ("WePost", "WePost"),
    ("TNT Express", "TNT Express"),
    ("UPS Express", "UPS Express"),
    ("ZeptoExpress", "ZeptoExpress"),
    ("Pgeon Delivery", "Pgeon Delivery"),
    ("Roadbull", "Roadbull"),
    ("LWE", "LWE"),
    ("SPC", "SPC"),
    ("DHL Ecommerce", "DHL Ecommerce"),
    ("DD Express", "DD Express"),
    ("Asiaxpress", "Asiaxpress"),
    ("Quantium Solutions", "Quantium Solutions"),
    ("M Xpress", "M Xpress"),
    ("Collectco", "Collectco"),
    ("Postco", "Postco"),
    ("DropIt", "DropIt"),
    ("Zoom", "Zoom"),
    ("Motorex", "Motorex"),
    ("EasiPass", "EasiPass"),
    ("Pickupp", "Pickupp"),
    ("Qxpress", "Qxpress"),
    ("UrbanFox", "UrbanFox"),
    ("J&T Express", "J&T Express"),
    ("Near U", "Near U"),
    ("May Express", "May Express"),
    ("Amber Courier", "Amber Courier"),
    ("Ping U", "Ping U"),
    ("Janio", "Janio"),
    ("Shopee Express", "Shopee Express"),
    ("Best Express", "Best Express"),
    ("SeeBuu Logistics", "SeeBuu Logistics"),
    ("Yunda Express", "Yunda Express"),
    ("XendNow", "XendNow"),
    ("TheLorry", "TheLorry"),
    ("Parcel To Post", "Parcel To Post"),
    ("ZTO Express", "ZTO Express"),
    ("Posstore", "Posstore"),
    ("Flickpost", "Flickpost"),
    ("Mantap Express", "Mantap Express"),
    ("YM Global", "YM Global"),
    ("BabyXpress", "BabyXpress"),
    ("ENF Express", "ENF Express"),
    ("ML Express", "ML Express"),
    ("TMT Express", "TMT Express"),
    ("Macrolink Express", "Macrolink Express"),
    ("Flash Express", "Flash Express"),
    ("Radian", "Radian"),
    ("Sendy Express", "Sendy Express"),
    ("iSend Logistics", "iSend Logistics"),
    ("Parcelhub", "Parcelhub"),
    ("Post2u", "Post2u"),
    ("JS Empire Express", "JS Empire Express"),
    ("Arriival", "Arriival"),
    ("BumiX", "BumiX"),
    ("Yuanda Express", "Yuanda Express"),
    ("BrightStar", "BrightStar"),
    ("uParcel", "uParcel"),
    ("Jomkirim", "Jomkirim"),
    ("Teleport", "Teleport"),
    ("J&T Cargo", "J&T Cargo"),
)

    service = forms.ChoiceField(
        label='Courier Service',
        choices=TRACKING_SERVICE,
        required=True
    )