import pytesseract
from PIL import Image

# 유튜브 썸네일 이미지 불러오기
image = Image.open('thumbnail.jpg')

# 이미지에서 텍스트 추출
extracted_text = pytesseract.image_to_string(image)

print(extracted_text)

from django.db import models

class YouTubeData(models.Model):
    title = models.CharField(max_length=255)
    description = models.TextField()
    video_id = models.CharField(max_length=100)

class ThumbnailText(models.Model):
    text = models.TextField()
    analysis_result = models.TextField()
    topic = models.CharField(max_length=255)

class NewsData(models.Model):
    news_title = models.CharField(max_length=255)
    news_link = models.URLField()
    reliability_score = models.FloatField()

