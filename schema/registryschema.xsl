<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
	<xsl:template match="/">
		<html>
			<body>
				<h2>Components Registered</h2>
				<table border="1">
					<tr bgcolor="#9acd32">
						<th>Name</th>
						<th>Description</th>
						<th>Authors</th>
						<th>Frequency</th>
						<th>Repository</th>
					</tr>
					<xsl:for-each select="components_metrics/component">
						<tr>
							<td>
								<xsl:value-of select="name"/>
							</td>
							<td>
								<xsl:value-of select="description"/>
							</td>
							<td>
								<xsl:value-of select="authors"/>
							</td>
							<td>
								<xsl:value-of select="frequency"/>
							</td>
							<td>
								<xsl:value-of select="repository"/>
							</td>
						</tr>
					</xsl:for-each>
				</table>
			</body>
		</html>
	</xsl:template>
</xsl:stylesheet>