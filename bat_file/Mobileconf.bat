C:
cd ELK
cd logstash
cd bin
FOR %%A IN (1) DO (
(logstash -f mobile.conf)
EXIT
)
EXIT





