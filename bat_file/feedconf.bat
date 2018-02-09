cd logstash
cd bin
FOR %%A IN (1) DO (
(logstash -f c.conf)
EXIT
)
EXIT





